/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(@Query() pagination: any) {
    console.log(pagination);
    return 'Lista de recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Detalhes do recado ID: ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota apaga o recado ID: ${id}`;
  }
}
