import type { CredentialSet } from '../authentication/Credentials';
import type { AccessMode } from '../ldp/permissions/Permissions';
import type { ResourceIdentifier } from '../ldp/representation/ResourceIdentifier';
import { AsyncHandler } from '../util/handlers/AsyncHandler';
import type { Authorization } from './Authorization';

export interface AuthorizerInput {
  /**
   * Credentials of the entity that wants to use the resource.
   */
  credentials: CredentialSet;
  /**
   * Identifier of the resource that will be read/modified.
   */
  identifier: ResourceIdentifier;
  /**
   * Modes that are requested on the resource.
   */
  modes: Set<AccessMode>;
}

/**
 * Verifies if the credentials provide access with the given permissions on the resource.
 * An {@link Error} with the necessary explanation will be thrown when permissions are not granted.
 */
export abstract class Authorizer extends AsyncHandler<AuthorizerInput, Authorization> {}
