import React, {useCallback} from "react";
import { TextInput, useColorScheme, View } from "react-native";
import { useDispatch } from "react-redux";
import { resetSearchResults, searchNews } from "../../redux/actions";
import styles from "./styles";
import {debounce} from 'lodash';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export const SearchInput: React.FC <{
    searchText: string;
    setSearchText: Function;
    setIsLoading: Function;
}> = ({searchText, setSearchText, setIsLoading}) => {
    const placeholderColor = useColorScheme() === 'dark' ? '#eee' : '#111';
    const dispatch: Function = useDispatch();
    const searchForText = useCallback (
        debounce((text: string) => {
            if (text?.trim().length > 0) {
              dispatch(searchNews(text, setIsLoading));
            } else {
              dispatch(resetSearchResults());
            }
          }, 1000),
          [setSearchText, dispatch, setIsLoading],
    )

    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Search"
            placeholderTextColor={placeholderColor}
            style={styles.input}
            value={searchText}
            onChangeText={(text: string) => {
                setSearchText(text);
                searchForText(text);
            }}  
            maxLength={40}
            returnKeyType={'search'}
        />

            <EvilIcons name="search" size={30} style={{marginBottom: 5}}/>
        </View>
    )
}