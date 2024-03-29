import {
  Controller,
  UseGuards,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Role } from '../../auth/role.enum';
import { Roles } from '../../auth/roles.decorator';
import { MoviesTagsService } from './movies-tags.service';

@Controller('tags')
export class MoviesTagsController {
  constructor(private readonly moviesTagsService: MoviesTagsService) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post(':tagId/movies/:movieId')
  tagMovie(
    @Param('tagId', ParseIntPipe) tagId: number,
    @Param('movieId', ParseIntPipe) movieId: number,
  ) {
    return this.moviesTagsService.tagMovie(movieId, tagId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':tagId/movies/:movieId')
  untangleMovie(
    @Param('tagId', ParseIntPipe) tagId: number,
    @Param('movieId', ParseIntPipe) movieId: number,
  ) {
    return this.moviesTagsService.untangleMovie(movieId, tagId);
  }
}
