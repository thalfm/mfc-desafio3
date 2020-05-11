import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {


  @Get()
  @Render('index.hbs')
  index() {
    return { title: "Maratona Full Cycle - Desafio 3" };
  }

  @Get('/sender')
  @Render('send.hbs')
  sender() {
    return { title: "Maratona Full Cycle - Desafio 3" };
  }

  @Get('/receiver')
  @Render('receive.hbs')
  receiver() {
    return { title: "Maratona Full Cycle - Desafio 3" };
  }
}
