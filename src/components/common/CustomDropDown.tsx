import React, { useEffect, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ms, scale, vs } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';
import CustomIcon from './CustomIcon';
import { TextSmall, TextSmaller } from './Texts';

interface CustomDropDownProps {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  searchable?: boolean;
  multiple?: boolean;
  error?: string | undefined;
  dropDownType?: 'DEFAULT' | 'FLATLIST' | 'SCROLLVIEW' | 'MODAL';
  value: any;
  onChange: (arg: any) => void;
  lists: { label: string; value: string }[] | undefined;
}

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  containerStyle,
  error,
  searchable,
  onChange,
  placeholder = "Select Item",
  multiple,
  searchPlaceholder = "Search here",
  dropDownType = 'MODAL',
  value = null,
  label,
  lists,
}: CustomDropDownProps): JSX.Element => {
  const labelVisible = !!label;

  const [open, setOpen] = useState(false);
  const [val, setValue] = useState(value);
  const [items, setItems] = useState(
    lists || [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ],
  );

  useEffect(() => {
    if (val) {
      onChange(val);
    }
  }, [val]);

  const renderListItem = (props: any) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => props.onPress(props.item)}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <TextSmall>{props?.label}</TextSmall>
        </View>
        <CustomIcon
          name={
            !props.isSelected
              ? 'radio-btn-passive'
              : 'radio-btn-active'
          }
          color={COLORS.primary}
          type="fontisto"
          size={ms(18)}
        />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {labelVisible && (
          <TextSmall textStyle={styles.label}>{label}</TextSmall>
        )}
        <View>
          <DropDownPicker
            open={open}
            value={val}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            renderListItem={renderListItem}
            multiple={multiple}
            placeholder={placeholder ?? ''}
            placeholderStyle={{ color: COLORS.white }}
            listMode={dropDownType}
            searchable={searchable}
            itemSeparator
            dropDownDirection="BOTTOM"
            textStyle={{ color: 'white' }}
            searchPlaceholder={searchPlaceholder}
            style={styles.dropdownstyle}
            containerStyle={styles.containerStyle}
            searchPlaceholderTextColor={COLORS.grey}
            dropDownContainerStyle={styles.dropdownContainerStyle}
            searchContainerStyle={styles.searchContainerStyle}
            searchTextInputStyle={styles.searchTextInputStyle}
            itemSeparatorStyle={styles.itemSeparatorStyle}
          />
        </View>
      </View>
      <TextSmaller bold color={'red'}>
        {error && `* ${error}`}
      </TextSmaller>
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    height: scale(47),
    maxHeight: 80,
    marginVertical: vs(13),
    gap: vs(5)
  },
  label: {},
  item: {
    height: 40,
    overflow: 'hidden',
    flex: 1,
  },
  listItem: {
    flex: 1,
    height: vs(45),
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownstyle: {
    paddingBottom: 0,
    paddingVertical: 0,
    paddingLeft: 20,
    height: scale(47),
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: COLORS.borderGrey,
    top: 5,
  },
  containerStyle: {
    marginBottom: 0,
    alignItems: 'center',
  },
  dropdownContainerStyle: {
    backgroundColor: 'black',
    top: vs(45),
    left: 0,
    borderColor: COLORS.borderGrey,
    borderRadius: 12,
    overflow: 'hidden',
    zIndex: 100,
  },
  searchContainerStyle: {
    borderBottomColor: COLORS.borderGrey,
  },
  searchTextInputStyle: {
    height: vs(40),
    fontSize: ms(14),
    borderColor: COLORS.borderGrey,
  },
  itemSeparatorStyle: { backgroundColor: COLORS.borderGrey }
});
