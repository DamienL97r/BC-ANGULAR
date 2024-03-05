import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IToken, IUser } from '../interfaces/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-in',
  templateUrl: './sign-up-in.component.html',
  styleUrls: ['./sign-up-in.component.css']
})
export class SignUpInComponent implements OnInit{

  imageList: string[] = [
    '../../assets/INC/IMG/Vetements/Jean/jean-1.png',
    "../../assets/INC/IMG/Vetements/chaussures-sac-cuir/chaussures_sac_cuir (2).png",
    "../../assets/INC/IMG/Vetements/Costume/costume.png",
    "../../assets/INC/IMG/Vetements/Coussins/coussins.jpg",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine.png",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir-2.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-1.jpg",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine-2.png",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe.png",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe-3.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis.jpg",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe-2.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-2.jpg",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-3.jpg",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir.png",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine-1.png",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir-1.png",
    "../../assets/INC/IMG/Vetements/chaussures-sac-cuir/chaussures_sac_cuir.png",
    "../../assets/INC/IMG/Vetements/Jean/jean.png",
    "../../assets/INC/IMG/Vetements/Costume/costume-2.png",
    "../../assets/INC/IMG/Vetements/Coussins/coussins-1.jpg",
    "../../assets/INC/IMG/Vetements/Coussins/coussins-2.jpg",
    '../../assets/INC/IMG/Vetements/Jean/jean-1.png',
    "../../assets/INC/IMG/Vetements/chaussures-sac-cuir/chaussures_sac_cuir (2).png",
    "../../assets/INC/IMG/Vetements/Costume/costume.png",
    "../../assets/INC/IMG/Vetements/Coussins/coussins.jpg",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine.png",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir-2.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-1.jpg",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine-2.png",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe.png",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe-3.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis.jpg",
    "../../assets/INC/IMG/Vetements/Robe de soirée/robe-2.png",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-2.jpg",
    "../../assets/INC/IMG/Vetements/Tapis/tapis-3.jpg",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir.png",
    "../../assets/INC/IMG/Vetements/manteau en laine/manteau-en-laine-1.png",
    "../../assets/INC/IMG/Vetements/Veste en cuir/veste-en-cuir-1.png",
    "../../assets/INC/IMG/Vetements/chaussures-sac-cuir/chaussures_sac_cuir.png",
    "../../assets/INC/IMG/Vetements/Jean/jean.png",
    "../../assets/INC/IMG/Vetements/Costume/costume-2.png",
    "../../assets/INC/IMG/Vetements/Coussins/coussins-1.jpg",
    "../../assets/INC/IMG/Vetements/Coussins/coussins-2.jpg",
  ];
  feedback:string = '';
  loaderConnexion: string = '';
  showFormRegister:boolean = false;
  showFormConnexion:boolean = false;
  showBtn:boolean = false;
  isLogged: boolean = this.serviceAuth.isLogged();
  isAdmin: boolean = this.serviceAuth.isAdmin();
  currentUser: IUser = {
    id: 0,
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    adresse: '',
    roles: '',
  };


constructor(public serviceAuth: AuthService, private http: HttpClient, private router: Router) {
}
  ngOnInit(): void {
    this.getUser();
    
  }

  displaySignInUpBtn() {
    this.showBtn = !this.showBtn;
  }

  displaySignIn() {
    this.showBtn = !this.showBtn;
    this.showFormRegister = !this.showFormRegister;
  }

  displaySignUp() {
    this.showBtn = !this.showBtn;
    this.showFormConnexion = !this.showFormConnexion;
  }

  showRegisterForm() {
    this.showFormConnexion = !this.showFormConnexion;
    this.showFormRegister = !this.showFormRegister;
    this.feedback = '';
  }

  showConnexionForm() {
    this.showFormConnexion = !this.showFormConnexion;
    this.showFormRegister = !this.showFormRegister;
    this.feedback = '';
  }

  getUser() {
    this.currentUser = this.serviceAuth.getUserData();
  }

  public registerForm:FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl(''),
    adresse: new FormControl(''),
    email: new FormControl(''),
    plainPassword: new FormControl(''),
    confirmPlainPassword: new FormControl(''),
    roles: new FormControl(['ROLE_USER']),
  })

  handleSubmit() {
    if(this.registerForm.valid){
      this.serviceAuth.add(this.registerForm.value).subscribe({
        complete:() => {this.feedback = 'Inscription terminée, veuillez vous connecter.';},
        error:() => {this.feedback = "L'utilisateur existe déja !"}
      });
    }
  }

  public formConnexion:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  handleSubmitConnexion() {
      this.serviceAuth.login(this.formConnexion.value).subscribe( {
        next:(token :IToken) => {this.serviceAuth.saveToken(token.token);},
        complete:() => {this.loaderConnexion = 'Connexion en cours...';},
        error:() => this.feedback = 'Mauvais mot de passe / email'
      });
  }


  //

  getSymfonyAdminLink(): void {
    // Obtenez le token JWT actuel depuis votre service d'authentification Angular
    const jwtToken = this.serviceAuth.getToken();
    window.location.href = `http://localhost:8000`;
  }

}
