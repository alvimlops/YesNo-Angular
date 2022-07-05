import { Injectable } from "@angular/core";

@Injectable( {providedIn:'root'})
export class UniqueIdService{

  public generateUniqueIdWithPrefix(prefix: string): string{
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`
  }

  private generateUniqueId(): string {
    return
  }

}
