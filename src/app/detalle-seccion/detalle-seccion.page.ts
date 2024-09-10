import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-seccion',
  templateUrl: './detalle-seccion.page.html',
  styleUrls: ['./detalle-seccion.page.scss'],
})
export class DetalleSeccionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  isJustificationsModalOpen = false;
  alertButtons = ['OK'];

  goBack() {
    this.navCtrl.back();
  }

  openJustificationsModal() {
    this.isJustificationsModalOpen = true;
  }

  closeJustificationsModal() {
    this.isJustificationsModalOpen = false;
  }

  enviar() {
    // Implementa aquí la lógica para enviar la justificación
    this.isJustificationsModalOpen = false;
  }
}
