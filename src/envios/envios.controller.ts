import { Controller, Post, Body, Get } from '@nestjs/common'; 
import { EnviosService } from './envios.service'; 
import { Envio } from './envios.interface'; 
 
@Controller('envios') 

export class EnviosController { 

  constructor(private readonly enviosService: EnviosService) {} 
 
  @Post() 

  crearEnvio(@Body() envio: Omit<Envio, 'id_envio' | 'tarifa'>): Envio { 

    return this.enviosService.crearEnvio(envio); 

  } 

  @Get()
  listarEnvios(): Envio[] {
    return this.enviosService.obtenerEnvios();
  }

} 