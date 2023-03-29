import bcrypt from 'bcryptjs';
import { supabase } from '@/infra/supabase/client';
import { ETables } from '@/infra/supabase/enums/tables.enum';

type UpdatePasswordInput = {
  userId: string;
  password: string;
}

export class UpdatePasswordService {
  public static async execute(input: UpdatePasswordInput) {
    const encryptedPassword = bcrypt.hashSync(input.password);

    await supabase
      .from(ETables.USERS)
      .update({ password: encryptedPassword })
      .eq('id', input.userId);
  }
}