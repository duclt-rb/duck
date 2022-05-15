export interface SidebarModule {
    label: string;
    customLabel?: string;
    hidden?: boolean;
    url?: string;
    icon?: string;
    class?: string;
    children?: SidebarModule[];
}

export const SidebarModules: SidebarModule[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-desktop',
        class: ''
    },
    {
        label: 'Project',
        icon: 'pi pi-slack',
        class: ''
    },
    {
        label: 'Application',
        icon: 'pi pi-qrcode',
        class: ''
    },
    {
        label: 'Users',
        icon: 'pi pi-users',
        class: ''
    },
    {
        label: 'Chat',
        icon: 'pi pi-comments',
        class: ''
    },
    {
        label: 'Cloud',
        icon: 'pi pi-cloud-upload',
        class: ''
    },
    {
        label: 'Setting',
        icon: 'pi pi-cog',
        class: ''
    }
];
