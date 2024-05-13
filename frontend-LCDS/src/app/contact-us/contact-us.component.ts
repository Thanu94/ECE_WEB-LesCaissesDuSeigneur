import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactFormData = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit(): void {}

  onSubmitContactForm(contactForm: NgForm) {
    console.log(contactForm.value);
    alert(
      'Nous avons bien reçu votre demande, nous vous recontacterons très rapidement.'
    );
  }
}
