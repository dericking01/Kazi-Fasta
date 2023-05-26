import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      {/* Your sidebar menu content goes here */}
      <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
    </View>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidebar {...props} />}>
          <Drawer.Screen
            name="Home"
            component={() => (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                  <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                      if (searchTerm) {
                        router.push(`/search/${searchTerm}`);
                      }
                    }}
                  />
                  <Popularjobs />
                  <Nearbyjobs />
                </View>
              </ScrollView>
            )}
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn
                  iconUrl={icons.menu}
                  dimension="60%"
                  onPress={() => navigation.openDrawer()}
                />
              ),
              headerRight: () => (
                <ScreenHeaderBtn
                  iconUrl={images.profile}
                  dimension="100%"
                  onPress={() => navigation.navigate('Profile')}
                />
              ),
              headerTitle: 'KAZI FASTA',
            })}
          />
          {/* Add additional screens if needed */}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Home;
