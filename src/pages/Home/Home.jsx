//import liraries
import React, {Component, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  Animated,
} from 'react-native';
import dashBoardStyles from './styles';
import {fakeActivities} from '../../fakeData/FakeData';

import img from '../../Assets/img-2/480x320/img12.jpg';
import img2 from '../../Assets/img-2/480x320/img26.jpg';
import img3 from '../../Assets/img-2/480x320/img30.jpg';

import image from '../../Assets/img-2/480x320/img6.jpg';
import image2 from '../../Assets/img-2/480x320/img7.jpg';
import image3 from '../../Assets/img-2/480x320/img8.jpg';
import image4 from '../../Assets/img-2/480x320/img9.jpg';
import DialogModal from '../../component/DialogModal/DialogModal';
import LottieView from 'lottie-react-native';
import {ToggleButton} from 'react-native-paper';
import {COLORS} from '../../Assets/styles/constatantes';
// create a component
const Home = () => {
  const dataCard = [
    {
      id: 1,
      title: 'Pour le Travail',
      texte:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse.',
      img: img,
    },
    {
      id: 2,
      title: 'Pour la Famille',
      texte:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse.',
      img: img2,
    },
    {
      id: 3,
      title: 'Autre Activite',
      texte:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse.',
      img: img3,
    },
  ];

  const dataCes = [
    {
      img: image,
      title: 'Financier',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse',
    },
    {
      img: image2,
      title: 'Administratif',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse',
    },
    {
      img: image3,
      title: 'Impots',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse',
    },
    {
      img: image4,
      title: 'Dommaine',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse',
    },
  ];

  const [press, SetPress] = useState(true);
  const handlePress = () => {
    SetPress(!press);
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    scaleDown();
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };
  const handleOpenModal = () => {
    setShowModal(true);
    setTimeout(() => {
      scaleUp();
    }, 200);
  };

  const scaleC = useState(new Animated.Value(0))[0];

  function scaleUp(params) {
    console.log('monted', scaleC);
    Animated.timing(scaleC, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }
  function scaleDown(params) {
    Animated.timing(scaleC, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    console.log('demonted', scaleC);
  }
  const lotieRef = useRef(null);
  return (
    <>
      <DialogModal handleClose={handleCloseModal} visible={showModal}>
        <Animated.View
          style={[
            dashBoardStyles.modalContainer,
            {
              transform: [
                {
                  scale: scaleC,
                },
              ],
            },
          ]}>
          <View>
            <LottieView
              ref={lotieRef}
              source={require('../../Assets/loties/Animation - 1703874443033.json')}
              style={{
                width: 300,
                height: 200,
              }}
              autoPlay
              loop={false}
            />
          </View>
        </Animated.View>
      </DialogModal>
      <ScrollView style={dashBoardStyles.body}>
        <View style={dashBoardStyles.header}>
          <Text style={dashBoardStyles.texte}>
            John Doe {showModal ? 'show' : 'Hide'}
          </Text>
          <TouchableOpacity onPress={handleOpenModal}>
            <Image
              source={require('../../Assets/img/kid-1837375_640.png')}
              style={dashBoardStyles.userImg}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Hello</Text>
          <Button
            title="Ligth"
            onPress={() => {
              COLORS.secondaryColor = '#000';
            }}
          />
        </View>
        <FlatList
          horizontal={true}
          data={fakeActivities}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={dashBoardStyles.cardItems}>
                <Text style={dashBoardStyles.cardItemsTitle}>{item.title}</Text>
                <Text style={dashBoardStyles.sampleText}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
        />

        <View style={dashBoardStyles.blocquestion}>
          <Text style={[dashBoardStyles.texte]}>
            Qu'est ce qui vous plait ?
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={dataCard}
          keyExtractor={data => data.id}
          showsHorizontalScrollIndicator={false}
          style={dashBoardStyles.flatlist}
          renderItem={data => {
            return (
              <View style={dashBoardStyles.mainContainerCard}>
                <View style={dashBoardStyles.cardMain}>
                  <Image
                    style={dashBoardStyles.imgCardMain}
                    source={data.item.img}
                  />
                  <View style={dashBoardStyles.texteCardMain}>
                    <Text style={dashBoardStyles.cardItemsTitle}>
                      {data.item.title}
                    </Text>
                    <Text style={dashBoardStyles.sampleText}>
                      {data.item.texte}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View>
          <Text
            style={[
              dashBoardStyles.cardItemsTitle,
              dashBoardStyles.beforeseparato,
            ]}>
            List Des Activites
          </Text>
          <TouchableOpacity onPress={handlePress}>
            <View>
              <Text style={dashBoardStyles.separator}>
                Voir {`${!press ? 'Moins' : 'Plus'}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {dataCes.slice(0, press ? 1 : dataCes.length).map((data, index) => (
          <View key={index} style={dashBoardStyles.mainContainercrd}>
            <View style={dashBoardStyles.petiteCard}>
              <Image style={dashBoardStyles.userImg} source={data.img} />
              <View style={dashBoardStyles.bloc}>
                <Text style={dashBoardStyles.cardItemsTitle}>{data.title}</Text>
                <Text
                  style={[
                    dashBoardStyles.sampleText,
                    dashBoardStyles.cardTexte,
                  ]}>
                  {data.description}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Home;
