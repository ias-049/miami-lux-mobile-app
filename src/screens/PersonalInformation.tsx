import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/common/CustomHeader';
import { useForm } from 'react-hook-form';
import { ms } from 'react-native-size-matters';
import Fields from '../components/common/Fields';
import { COLORS } from '../utils/theme';
import { IdentityInput } from '../components/IdentityInput';

interface PersonalInformationProps {

}

export const PersonalInformationScreen: React.FC<PersonalInformationProps> = (props) => {

    const { } = props;

    const { control, handleSubmit } = useForm()

    const FIELDS = [
        {
            id: '1',
            type: 'text',
            label: "Name",
            name: "name",
            key: "name",
            placeholder: "Full name",
            icon: { name: "user", type: "font-awesome-6", color: "#4F2F8B", size: ms(18) }
        },

        {
            id: '5',
            type: 'text',
            label: "Phone number",
            name: "phonenumber",
            placeholder: "Enter Phone number",
            key: "phonenumber",
            keyboardType: "number-pad",
            icon: { name: "call", type: "ionicons", color: "#4F2F8B", size: ms(20) }
        },
        {
            id: '2',
            type: 'text',
            label: "Email Address",
            name: "email",
            key: "email",
            placeholder: "Enter email",
            icon: { name: "mail", type: "ionicons", color: "#4F2F8B", size: ms(18) }
        },
        {
            id: '3',
            type: 'text',
            label: "Date of Birth",
            name: "dob",
            key: "dob",
            placeholder: "Enter date of bith",
            icon: { name: "calendar", type: "font-awesome-6", color: "#4F2F8B", size: ms(18) }
        },
        {
            id: '4',
            type: 'text',
            label: "Address",
            name: "address",
            key: "address",
            placeholder: "Enter address",
            icon: { name: "location-sharp", type: "ionicons", color: "#4F2F8B", size: ms(20) }
        },
    ]


    return (
        <BackgroundWrapper>
            <SafeAreaView>
                <CustomHeader title='Personal Information' cgb rightIcon={{ name: "check", type: "feather" }} />
                <View style={styles.container}>
                    <Fields fields={FIELDS} control={control} />
                    <IdentityInput />
                </View>
            </SafeAreaView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
});
