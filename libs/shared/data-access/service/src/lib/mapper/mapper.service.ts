import { Injectable } from '@angular/core';
import { createMapper, Mapper } from '@automapper/core';
import { classes } from '@automapper/classes';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  public getMapper(name: string): Mapper {
    return createMapper({
      name,
      pluginInitializer: classes,
    });
  }
}
