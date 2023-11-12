import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  message: string = 'Votre session a expiré, veuillez vous reconnecter.';
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (this.isTokenExpired(token)) {
      
      localStorage.removeItem("token");
      alert(this.message);
      this.router.navigate(['/connexion-inscription']);
      
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }

  isTokenExpired(token: string | null): boolean {
    // Gérer le cas où le token est null
    if (token === null) {
      return false;
    }
  
    try {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      const expirationTimeInSeconds = payload.exp;
  
      const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;
      const now = Date.now();
      
  
      if (now >= expirationTimeInMilliseconds) {
        // Le token est expiré
        return true;
      } else {
        // Le token est valide
        return false;
      }
    } catch (error) {
      // En cas d'erreur, considérer le token comme expiré
      return true;
    }
  }
  
}
