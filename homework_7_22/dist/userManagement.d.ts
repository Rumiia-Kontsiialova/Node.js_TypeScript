export declare namespace UserManagement {
    namespace Admin {
        class AdminUser {
            name: string;
            email: string;
            isSuperAdmin: boolean;
            constructor(name: string, email: string, isSuperAdmin?: boolean);
            promoteToSuperAdmin(): void;
            demoteFromSuperAdmin(): void;
            getInfo(): string;
        }
    }
}
//# sourceMappingURL=userManagement.d.ts.map