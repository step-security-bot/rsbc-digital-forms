import { useRecoilValue } from 'recoil';
import { userAtom } from '../../atoms/users';

export const InitialValues = () => {
    const user = useRecoilValue(userAtom);

    return {
        //common fields
        "IRP": false,
        "VI": false,
        "24Hour": false,
        "12Hour": false,
        "drivers-licence-jurisdiction": '',
        "drivers-number":'',
        "last-name":'',
        "given-name":'',
        "dob": '',
        "address":'',
        "city":'',
        "phone": '',
        "prov-state":'',
        "postal-code":'',
        "vehicle-jurisdiction": '',
        "plate-number": '',
        "registration-number": '',
        "vehicle-year": '',
        "vehicle-make-model": '',
        "vehicle-style": '',
        "vehicle-colour": [],
        "nsc-prov-state": '',
        "vin-number": '',
        "nsc-number": '',
        "owned-by-corp" : false,
        "corp-name": '',
        "owner-last-name":'',
        "owner-first-name": '',
        "registered-owner-address": '',
        "registered-owner-phone": '',
        "registered-owner-city": '',
        "registered-owner-prov-state": '',
        "registered-owner-postal": '',
        "officer-lastname":user.last_name || '',
        "officer-prime-id":user.badge_number || '',
        "officer-agency":user.agency || '',
        //24-hour form fields
        "vehicle-impounded":'',
        "key-location": '',
        "reason-for-not-impounding": '',
        'ILO-options': '',
        "ILO-name": '',
        "ILO-address":'',
        "ILO-city":'',
        "ILO-phone":'',
        "vehicle-released-to": '',
        "date-released": '',
        "time-released": '',
        "type-of-prohibition": '',
        "offence-address":'',
        "offence-city":'',
        "offence-agency-file":'',
        "date-of-driving":'',
        "time-of-driving": '',
        "witnessed-by-officer":false,
        "admission-by-driver":false,
        "independent-witness":false,
        "video-surveillance":false,
        "other-reasonable-ground":false,
        "prescribed-device":'',
        "test-used-alcohol": '',
        "ASD-expiry-date": '',
        "alcohol-test-result": '',
        "BAC-result": '',
        "test-used-drug": '',
        "THC":false,
        "Cocaine":false,





    }
}