import { Body, Controller, Get } from '@nestjs/common';
import { ScrapperService } from '../services/scrapper.service';

@Controller('/scrapper')
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Get('/pure')
  async GetPureScrapp(@Body() body: { url?: string }) {
    let result: string | null = null;

    if (body?.url) {
      result = await this.scrapperService.getPure(body.url);
    }

    return {
      statusCode: 200,
      data: result,
    };
  }

  @Get('/text')
  async GetTextScrapp(@Body() body: { url?: string }) {
    let result: string[] = [];

    if (body?.url) {
      result = await this.scrapperService.getText(body.url);
    }

    return {
      statusCode: 200,
      data: result.length ? result : null,
    };
  }
}
