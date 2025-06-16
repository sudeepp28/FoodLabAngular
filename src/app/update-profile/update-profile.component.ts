import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  standalone:false,
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit{
   selectedFile: File | null = null;
  message = '';
  imageUrl = '';
  name="";
  email='';
  userProfile:any 
  loading=false
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getprofileData()
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    // this.name=user.name
    // this.email=user.email
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadProfile() {
    if (!this.selectedFile) {
      this.message = 'Please select an image';
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    

    if (!userId || !this.name || !this.email ) {
      this.message = 'User info missing in localStorage';
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('userId', userId);
   formData.append('name',this.name);
   formData.append('email',this.email)

   this.loading=true
    this.http.post<any>('https://node-js-wnil.onrender.com/upload', formData)
      .subscribe({
        next: (res) => {
          this.loading=false
          this.message = 'Profile uploaded successfully';
          this.imageUrl = res.profile.imageUrl;
         this.getprofileData()
        },
        error: (err) => {
           this.loading=false
          console.error(err);
          this.message = 'Upload failed';
        }
      });
       
  }
  getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    

    this.http.get<any[]>('https://node-js-wnil.onrender.com/profile').subscribe((data)=>{
      const allProfiles=data
     

      this.userProfile=data.find(d=>d.userId===userId)
      this.email=this.userProfile.email
      this.name=this.userProfile.name
    })
  }

}
