import { Injectable } from '@nestjs/common';
import { Envio } from './envios.interface'; 

@Injectable()
export class EnviosService {
    private envios: Envio[] = []; 

    calcularTarifa(distancia: number): number {   
      const tarifaBase = 5;  
      const costoPorKilometro = 0.5;  
      return tarifaBase + (distancia * costoPorKilometro); 
    }

    crearEnvio(envio: Omit<Envio, 'id_envio' | 'tarifa'>): Envio { 

        const id_envio = (this.envios.length + 1).toString(); 
    
        const tarifa = this.calcularTarifa(envio.distancia); 
    
        const nuevoEnvio = { ...envio, id_envio, tarifa }; 
    
        this.envios.push(nuevoEnvio); 
    
        return nuevoEnvio; 
    
    } 

    obtenerEnvios(): Envio[] { 
        return this.envios;     
    } 
}
