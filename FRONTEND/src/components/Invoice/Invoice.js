

import React, { useState, useEffect, useContext } from 'react'

import { Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import Logo from '../../assets/logoo.png'
import { StepperContext } from '../../contexts/stepperContext'
import axios from 'axios'


const styles = StyleSheet.create({
    page: { paddingLeft: 35, paddingRight: 35, display: 'flex', backgroundColor: 'white', margin: 35 },
    header: { marginTop: 20, flexDirection: "row", justifyContent: "space-around", alignItems: 'center' },
    headerLogo: { width: 200 },
    headerTitle: { fontSize: 25, color: "green" },
    sectionFirst: { marginTop: 10, flexDirection: "row", justifyContent: "space-around", alignItems: 'center' },
    line1: {backgroundColor:"white",padding: 4,color: "white", marginHorizontal: 30, flexDirection: "row", alignItems:'center'},
    line2: {backgroundColor:"E7F0FF",padding: 4,color: "white", marginHorizontal: 30, flexDirection: "row", alignItems:'center'}
});


const Invoice = (props) => {
const { courseList, examList, purchaseList, accoList, otherFeeList} = props.studentData
const [registration, setRegistration] = useState();
const getRegistration = async () => {
const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/registration`);
    setRegistration(response.data[0])

  }

useEffect(() => {
    getRegistration();
}, [])
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Image style={styles.headerLogo} src={Logo} />        
                    </View>
                    <View className=" mr-6">
                        <Text style={styles.headerTitle}>{}</Text>
                    </View>
                </View>
                <View style={styles.sectionFirst}>
                    <View style={{ width: 240 }}>
                        <Text style={{ fontSize: 9 }}>EAGLE VISION LANGUAGE INSTITUTE </Text>
                        <Text style={{ fontSize: 9, marginTop: 2 }}>45 Manye Adorkor Avenue New Achimota </Text>
                        <Text style={{ fontSize: 9, marginTop: 2 }}>P.0 box MS 474 Mile 7 New-Achimota Accra</Text>
                        <Text style={{ fontSize: 9, marginTop: 2 }}>Tel. +233302405496</Text>
                        <Text style={{ fontSize: 9, marginTop: 2 }}>Email: jodan@eaglevisionworld.com</Text>
                    </View>
                    <View style={{ marginTop: 5, flexDirection: "row", paddingRight: 40, }}>
                        <View style={{ flexDirection: "column", alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 8, color: "green", marginTop: 2 }}>Invoice No : </Text>
                            <Text style={{ fontSize: 8, color: "green", marginTop: 2 }}>Date : </Text>
                            <Text style={{ fontSize: 8, color: "green", marginTop: 2 }}>Customer ID : </Text>

                        </View>
                        <View style={{ flexDirection: "column", alignItems: "start" }}>
                            <Text style={{ fontSize: 9, fontWeight: "bold", marginHorizontal: 4, marginTop: 2 }}>EVI-BEN-09/22 </Text>
                            <Text style={{ fontSize: 9, fontWeight: "bold", marginHorizontal: 4, marginTop: 2 }}>06-09-22 </Text>
                            <Text style={{ fontSize: 9, fontWeight: "bold", marginHorizontal: 4, marginTop: 2 }}>BEN-05</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 30}}>
                    <Text style={{marginTop: 3, fontSize: "10", fontWeight: "800"}}>GBETIE NICOLE</Text>
                    <Text style={{marginTop: 3, fontSize: "9"}}>Abomey-Calavi</Text>
                    <Text style={{marginTop: 3, fontSize: "9"}}>BENIN</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <View style={{backgroundColor: "#2E74B4", padding: 10,color:"white",marginHorizontal: 30,flexDirection: "row", alignItems:'center'}}>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>Salesperson</Text>
                        </View>
                        <View style={{width: 250}}>
                            <Text style={{fontSize:9}}>Service</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9, marginLeft: 6}}>Payment Terms</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>Due Date</Text>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor: "#E7F0FF",color: "black", marginHorizontal: 30, flexDirection: "row", alignItems:'center'}}>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>JODAN GBELINGA</Text>
                        </View>
                        <View style={{width: 250, margin: 4}}>
                            <Text style={{fontSize:10}}>SEMI-INTENSIVE ENGLISH PROGRAM WITH ACCOMODATION FOR GBETIE NICOLE FOR 02 MONTHS</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9, marginLeft: 6}}>Due Upon Receipt</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>03-10-22</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={{marginTop:8,}}>
                    <View style={{backgroundColor: "#2E74B4", padding: 10, color:"white",marginHorizontal: 30,flexDirection: "row", alignItems:'center'}}>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>Quantity</Text>
                        </View>
                        <View style={{width: 250}}>
                            <Text style={{fontSize:9}}>Description</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9, marginLeft: 6}}>Unit Price</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>Line Total</Text>
                        </View>
                        
                    </View>
                 
                   {registration && <View style={{backgroundColor: "#E7F0FF",padding: 4,color: "black", marginHorizontal: 30, flexDirection: "row", alignItems:'center'}}>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>1</Text>
                        </View>
                        <View style={{width: 250}}>
                            <Text style={{fontSize:9}}>{registration.registrationname}</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9, marginLeft: 6, fontWeight: "extralight"}}>{registration.registrationprice}</Text>
                        </View>
                        <View style={{width: 150}}>
                            <Text style={{fontSize:9}}>{registration.registrationprice} </Text>
                        </View>
                    </View>}
                    
                    {courseList !== 0 &&
                    courseList.map((courses, index) => (
                        <View style={[index % 2 === 0 && styles.line1, index % 2 !== 0 && styles.line2]}>
                            <View style={{width: 150}}>
                                <Text style={{fontSize:9}}>1</Text>
                            </View>
                            <View style={{width: 250}}>
                                <Text style={{fontSize:9}}> {courses.coursedescription}</Text>
                            </View>
                            <View style={{width: 150}}>
                                <Text style={{fontSize:9, marginLeft: 6, fontWeight: "extralight"}}> {courses.price}</Text>
                            </View>
                            <View style={{width: 150}}>
                                <Text style={{fontSize:9}}>{courses.price} </Text>
                            </View>
                        </View>
                    ))
                        
                    }
                </View>
                <View>

                </View>
            </Page>
        </Document>
    )
}

export default Invoice