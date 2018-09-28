export default {
  app: {
    title: 'Game Progression',
    navigation: {
      dashboard: 'Dashboard',
      games: 'Games'
    }
  },
  dashboard: {
    title: 'Your Dashboard',
    labels: {
      timeRemaining: 'Time Remaining',
      days: 'Days',
      numberOfUnfinishedGames: 'Number of Unfinished Games',
      numberOfFinishedGames: 'Number of Finished Games'
    }
  },
  games: {
    gamesListing: {
      labels: {
        platform: 'Platform',
        completion: 'Completion',
        sort: 'Sort',
        search: 'Search',
        estimatedCompleted: 'Est. Completed',
        completionDate: 'Completion Date'
      },
      filters: {
        platform: {
          all: 'All'
        },
        completion: {
          all: 'All',
          complete: 'Complete',
          notComplete: 'Not Complete'
        },
        sort: {
          priority: 'Priority',
          dateCreated: 'Date Created'
        }
      },
      placeholders: {
        searchText: 'Enter a game name...'
      },
      actions: {
        addGame: 'Add Game',
        deleteGames: 'Delete {0} Games'
      }
    },
    addGame: {
      title: 'Add Game',
      actions: {
        save: 'Save',
        cancel: 'Cancel'
      },
      labels: {
        name: 'Name',
        imageUrl: 'Image URL',
        platform: 'Platform',
        numberOfHoursToComplete: 'Number of Hours to Complete',
        priority: 'Priority'
      },
      placeholders: {
        platform: 'Choose a Platform...',
        priority: 'Choose a priority...'
      }
    },
    editGame: {
      title: 'Edit {0}',
      actions: {
        save: 'Save',
        cancel: 'Cancel'
      },
      labels: {
        numberOfHoursPlayed: 'Number Of Hours Played',
        priority: 'Priority',
        isComplete: 'Is Complete'
      }
    }
  },
  profile: {
    profileDetails: {
      title: 'My Profile',
      actions: {
        edit: 'Edit'
      },
      labels: {
        name: 'Name',
        language: 'Language',
        averageNumberOfHoursToGamePerDay: 'Average Number of Hours to Game Per Day'
      }
    },
    editProfile: {
      title: 'Edit Your Profile',
      actions: {
        save: 'Save',
        cancel: 'Cancel'
      },
      labels: {
        firstName: 'First Name',
        lastName: 'Last Name',
        language: 'Language',
        averageNumberOfHoursToGamePerDay: 'Average Number of Hours to Game Per Day'
      },
      placeholders: {
        language: 'Choose a language...'
      }
    }
  }
};