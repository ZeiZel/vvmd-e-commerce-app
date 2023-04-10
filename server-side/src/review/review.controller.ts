import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto) {
		return this.reviewService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedReview = await this.reviewService.delete(id);

		if (!deletedReview) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Get('getByProduct/:productId')
	async findByProduct(@Param('productId') productId: string) {
		return this.reviewService.findByProductId(productId);
	}
}
