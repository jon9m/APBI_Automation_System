const NavigationItems = [
    {
        type: "text",
        level: 1,
        id: "main_dashboard",
        title: "Dashboard",
        path: "/",
        class: "dashboard",
        children: [
            {
                type: "text",
                level: 2,
                id: "main_dashboard",
                title: "Main Dashboard",
                class: "dashboard",
                path: "/"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "portal_setting",
        title: "Portal Setting",
        class: "settings",
        path: "/members",
        children: [
            {
                type: "text",
                level: 2,
                id: "portal_setting",
                title: "Websites",
                class: "settings",
                path: "/members"
            },
            {
                type: "text",
                level: 2,
                id: "portal_setting",
                title: "Social Media Accounts",
                class: "settings",
                path: "/forms"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "content_management",
        title: "Content Management",
        class: "dvr",
        path: "/contacts",
        children: [
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Portal Pages",
                class: "dvr",
                path: "/members"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Menues",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Articles",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Blogs",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Image Albums",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Banner Sliders",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Rows And Columns",
                class: "dvr",
                path: "/forms"
            },
            {
                type: "text",
                level: 2,
                id: "content_management",
                title: "Settings",
                class: "dvr",
                path: "/forms"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "user_management",
        title: "User Management",
        class: "person_add",
        path: "/invoice",
        children: [
            {
                type: "text",
                level: 2,
                id: "user_management",
                title: "Users and Policies",
                class: "person_add",
                path: "/userspolicies"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "inspectors_management",
        title: "Inspectors Management",
        class: "people_outline",
        path: "/projects",
        children: [
            {
                type: "text",
                level: 2,
                id: "inspectors_management",
                title: "Inspectors",
                class: "people_outline",
                path: "/projects"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "bookings",
        title: "Bookings",
        class: "filter_none",
        path: "/members",
        children: [
            {
                type: "text",
                level: 2,
                id: "bookings",
                title: "Inspectors",
                class: "filter_none",
                path: "/members"
            },
            {
                type: "text",
                level: 2,
                id: "bookings",
                title: "Inspectors",
                class: "filter_none",
                path: "/members"
            },
            {
                type: "text",
                level: 2,
                id: "bookings",
                title: "Inspectors",
                class: "filter_none",
                path: "/members"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "locations_management",
        title: "Locations Management",
        class: "location_searching",
        path: "/locations",
        children: [
            {
                type: "text",
                level: 2,
                id: "locations_management",
                title: "Suburb Profile",
                class: "location_searching",
                path: "/locations"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "communications",
        title: "Communications",
        class: "contact_phone",
        path: "/communication",
        children: [
            {
                type: "text",
                level: 2,
                id: "communications",
                title: "Contact Groups",
                class: "contact_phone",
                path: "/communication"
            },
            {
                type: "text",
                level: 2,
                id: "communications",
                title: "Send SMS",
                class: "contact_phone",
                path: "/communication"
            },
            {
                type: "text",
                level: 2,
                id: "communications",
                title: "Send Email",
                class: "contact_phone",
                path: "/communication"
            }
        ]
    },
    {
        type: "text",
        level: 1,
        id: "training_course",
        title: "Training Course",
        class: "school",
        path: "/training",
        children: [
            {
                type: "text",
                level: 2,
                id: "training_course",
                title: "Bookings",
                class: "school",
                path: "/training"
            },
            {
                type: "text",
                level: 2,
                id: "training_course",
                title: "Courses",
                class: "school",
                path: "/training"
            },
            {
                type: "text",
                level: 2,
                id: "training_course",
                title: "Qualifications",
                class: "school",
                path: "/training"
            },
            {
                type: "text",
                level: 2,
                id: "training_course",
                title: "Venues",
                class: "school",
                path: "/training"
            },
            {
                type: "text",
                level: 2,
                id: "training_course",
                title: "Trainers",
                class: "school",
                path: "/training"
            }
        ]
    }
];

export default NavigationItems;