enum EventJoCategory {
    COMPETITION_LOCATION = 'Competition location',
    CULTURAL_OLYMPIADS = 'Cultural Olympiads',
    OLYMPICS_CELEBRATIONS = 'Olympics celebrations',
    OFFICIAL_SHOPS = 'Official shops',
    ICONIC_OLYMPIC_SITES = 'Iconic Olympic sites',
}

const categoryToId = {
    'Competition location': 'venues',
    'Cultural Olympiads': 'cultural_event',
    'Olympics celebrations': 'celebration_event',
    'Official shops': 'official-stores',
    'Iconic Olympic sites': 'landmarks',
};

const category = EventJoCategory.CULTURAL_OLYMPIADS;
console.log(category);
console.log(Object.keys(categoryToId));

function categoryParamToId(category: EventJoCategory): string | null{
    if (category === EventJoCategory.COMPETITION_LOCATION) return 'venues';
    if (category === EventJoCategory.CULTURAL_OLYMPIADS) return 'cultural_event';
    if (category === EventJoCategory.OLYMPICS_CELEBRATIONS)
        return 'celebration_event';
    if (category === EventJoCategory.OFFICIAL_SHOPS) return 'official-stores';
    if (category === EventJoCategory.ICONIC_OLYMPIC_SITES) return 'landmarks';
    return null;
}


function eventCategoryToId(category: EventJoCategory): string | null {
    if (Object.keys(categoryToId).includes(category)) {
        return categoryToId[category];
    }
    return null;
}