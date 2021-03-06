import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Cart: {
            screens: {
              CartScreen: 'Cart',
            },
          },
          Upload: {
            screens: {
              UploadScreen: 'Upload',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'Profile',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'Settings',
            },
          },                              
        },
      },
      NotFound: '*',
    },
  },
};
