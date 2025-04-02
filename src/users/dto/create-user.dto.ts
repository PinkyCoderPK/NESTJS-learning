import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  password: string;
  name: string;

  @Type(() => Number) // Ép kiểu dữ liệu từ string -> number
  @Min(0, { message: 'Tuổi phải lớn hơn 0' })
  @Max(100, { message: 'Tuổi phải bé hơn 100' })
  @IsNumber()
  age: number;

  address: string;
}
