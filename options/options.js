import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },

  container: {
    flex: 1,
    height: 100,
    padding: 13
  },

  text: {
    color: "black",
    fontSize: 20
  },

  buttonPressed: {
    backgroundColor: "aquamarine"
  },

  buttonNotPressed: {
    backgroundColor: "blue"
  },

  button: {
    borderRadius: 4,
    padding: 15,
    marginTop: 10
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  }
})
export const globalOptions = {
  name: "datamoto_wms_32527",
  url: "https://datamoto_wms_32527.botics.co",
  api: "https://datamoto_wms_32527.botics.co/api/v1"
}
export const modulesOptions = {
  "@modules/app-menu": {
    title: "Datamoto WMS",
    copy: "Routes available!",
    styles: styles
  }
}
