export const GamesListingStoreKeys = {
  Mutations: {
    RetrieveGamesSuccess: 'retrieveGamesSuccess',
    RetrieveGamesFailure: 'retrieveGamesFailure',
    SetPlatformFilter: 'setPlatformFilter',
    SetCompletionFilter: 'setCompletionFilter',
    SetSortBy: 'setSortBy',
    SetSearchText: 'setSearchText',
    ToggleGameSelection: 'toggleGameSelection',
    ClearGameSelections: 'clearGameSelections'
  },
  Actions: {
    RetrieveGames: 'retrieveGames',
    SetPlatformFilter: 'setPlatformFilter',
    SetCompletionFilter: 'setCompletionFilter',
    SetSortBy: 'setSortBy',
    SetSearchText: 'setSearchText',
    DeleteSelectedGames: 'deleteSelectedGames'
  }
};