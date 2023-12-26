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

  const scalevalue = React.useRef(new Animated.Value(0)).current;
  const handleCloseModal = (state, setState) => {
    setState(!state);
    startAnimation();
  };
  const startAnimation = () => {
    Animated.spring(scalevalue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    startAnimation();
  });

  return (
    <>
      <DialogModal handleClose={handleCloseModal} visible={showModal}>
        <Animated.View
          style={[
            dashBoardStyles.modalContainer,
            {transform: [{scale: scalevalue}]},
          ]}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Image
              source={require('../../Assets/img/kid-1837375_640.png')}
              style={dashBoardStyles.userImg}
            />
          </TouchableOpacity>
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              vitae sit quam delectus. Reiciendis eaque consequatur laboriosam
              aut temporibus in.
            </Text>
          </View>
        </Animated.View>
      </DialogModal>
      <ScrollView style={dashBoardStyles.body}>
        <View style={dashBoardStyles.header}>
          <Text style={dashBoardStyles.texte}>
            John Doe {showModal ? 'show' : 'Hide'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Image
              source={require('../../Assets/img/kid-1837375_640.png')}
              style={dashBoardStyles.userImg}
            />
          </TouchableOpacity>
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
