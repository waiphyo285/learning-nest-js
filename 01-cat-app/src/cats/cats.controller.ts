import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/index';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}