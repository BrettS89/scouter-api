import { HookContext } from '@feathersjs/feathers';

export const resolveById = (field: string, resolveTo: string, service: string, params?: Record<string, any>) => (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
  resource[resolveTo] = (
    await app.service(service).get(resource[field], params ?? {}).catch(() => null)
  );
};
