import { Sender } from '@modules/senders/domain/sender/sender'
import { ISendersRepository } from '@modules/senders/repositories/ISendersRepository'

type SearchSendersRequest = {
  query?: string
  page?: number
  perPage?: number
}

type SearchSendersResponse = Sender[]

export class SearchSenders {
  constructor(private sendersRepository: ISendersRepository) {}

  async execute({
    query,
    page = 1,
    perPage = 20,
  }: SearchSendersRequest): Promise<SearchSendersResponse> {
    const contacts = await this.sendersRepository.search({
      query,
      page,
      perPage,
    })

    return contacts
  }
}
