import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { getRepository } from "typeorm";
import { Turism } from "../entities/Turism";
import { Permission } from "../entities/Permission";
import { Category } from "../entities/Category";
import { Library } from "../entities/Library";

export const UserRepository = () => {
  return getRepository(User);
};

export const RoleRepository = () => {
  return getRepository(Role);
};

export const PermissionRepository = () => {
  return getRepository(Permission);
};

export const TurismRepository = () => {
  return getRepository(Turism);
};

export const CategoryRepository = () => {
  return getRepository(Category);
};

export const LibraryRepository = () => {
  return getRepository(Library)
}

// Normal User Session

