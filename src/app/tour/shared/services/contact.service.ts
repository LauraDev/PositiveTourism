import { BackendService } from 'src/app/core/backend.service';
import { Injectable } from '@angular/core';

@Injectable()

export class ContactService {

  constructor(
    private backendService: BackendService
  ) { }

  /**
   * Send an email to a tour organiser
   * Emit an alert if msg not sent
   * @method postMessage
   * @param name string - name of the user sending the message
   * @param email string - email of the user sending the message
   * @param message string - content of the msg
   * @param contactEmail string - email of the tour that needs to be contacted
   */
  public postMessage(name: string, email: string, message: string, contactEmail: string): Promise<string> {

    return new Promise( (resolve, reject) => {
      const body = { name, email, message, contactEmail };
      const path = 'messages';

      return this.backendService.post(path, body)
      .then(() => resolve())
      .catch(() => reject());
    });
  }
}

