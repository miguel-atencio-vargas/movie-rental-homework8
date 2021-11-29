import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from '../entities/movie.entity';
import { MoviesCustomersService } from './movies-customers.service';
import { MoviesCustomersController } from './movies-cutomers.controller';

describe('MoviesController', () => {
  let moviesCustomersController: MoviesCustomersController;
  let moviesCustomersService: MoviesCustomersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [MoviesCustomersController],
      providers: [
        {
          provide: MoviesCustomersService,
          useValue: {
            getMoviesRented: jest.fn().mockResolvedValue([new Movie()]),
          },
        },
      ],
    }).compile();

    moviesCustomersController = moduleRef.get<MoviesCustomersController>(
      MoviesCustomersController,
    );
    moviesCustomersService = moduleRef.get<MoviesCustomersService>(
      MoviesCustomersService,
    );
  });

  it('should be defined', () => {
    expect(moviesCustomersController).toBeDefined();
  });

  describe('getMoviesRented()', () => {
    it('should return a list of movies rented by the user logged', () => {
      expect(
        moviesCustomersController.getMoviesRented(1, { user: { id: 1 } }),
      ).resolves.toHaveLength(1);
      expect(moviesCustomersService.getMoviesRented).toBeCalledWith(1);
    });
  });
});
