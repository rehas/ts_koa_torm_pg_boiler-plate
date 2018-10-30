import {Get, JsonController, Param} from 'routing-controllers';

@JsonController()
export default class UserController{
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ){
    console.log(`The user requested is has ID number : ${id}`)
    return `The user requested is has ID number : ${id}`
  }
}