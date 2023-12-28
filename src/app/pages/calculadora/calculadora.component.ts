import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/app.model';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  calculadoraForm: FormGroup;

  productosSelectOptions: Producto[] = [];
  resultadosCalculadora: any = {};

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.calculadoraForm = this.formBuilder.group({
      producto: ['', Validators.required],
      plazo: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      enReinversion: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiService.obtenerProductos().subscribe((data) => {
      this.productosSelectOptions = data;
    });
  }

  handleOnClickCalcular() {
    // console.log(this.calculadoraForm.value);
    this.apiService
      .obtenerCalculo(this.calculadoraForm.value)
      .subscribe((data) => {
        this.resultadosCalculadora = data;
      },);
  }
}
