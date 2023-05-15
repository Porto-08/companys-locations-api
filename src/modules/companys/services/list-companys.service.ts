import { Inject, Injectable } from '@nestjs/common';
import { CompanyRepository } from '../infra/typeorm/repositories/CompanyRepository';
import { CompanyPaginated } from '../interfaces';

@Injectable()
export class ListCompanyService {
  constructor(
    @Inject(CompanyRepository)
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(page: number, limit: number): Promise<CompanyPaginated> {
    const companys = await this.companyRepository.listPaginated(page, limit);

    return companys;
  }
}
