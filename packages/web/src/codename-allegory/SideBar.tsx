import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { H4 } from 'src/fonts/Fonts'
import { textStyles, fonts, standardStyles } from 'src/styles'
import Button, { BTN, SIZE } from 'src/shared/Button.3'

export default function SideBar({ isOpen }) {
  return (
    <>
      <View style={[styles.expander, isOpen && styles.expanderOpen]} />
      <View style={[styles.root, isOpen ? styles.showSide : styles.hideSide]}>
        <View>
          <H4 style={[textStyles.italic, standardStyles.elementalMarginBottom]}>
            As Wealth Flowers
          </H4>
          <Text style={fonts.p}>
            A poem and art piece that... Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
          <Button
            style={standardStyles.elementalMargin}
            kind={BTN.DARKNAKED}
            text="Read about the poem"
            href="#poemlink"
            size={SIZE.normal}
          />
          <Button
            kind={BTN.DARKNAKED}
            text="Read about the art"
            href="#artlink"
            size={SIZE.normal}
          />
        </View>
        <View style={standardStyles.elementalMarginTop}>
          <Contributor role="Poetry" name="Gabrielle Micheletti, cLabs" />
          <Contributor role="Code & Animation" name="Aaron DeRuvo, cLabs" />
          <Contributor role="Art & Design" name="Taylor Lahey, cLabs" />
        </View>
      </View>
    </>
  )
}

function Contributor({ role, name }) {
  return (
    <View style={styles.contributor}>
      <Text style={[fonts.mini, styles.role]}>{role}</Text>
      <Text style={fonts.legal}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  expander: {
    width: 0,
    willChange: 'width',
    transitionProperty: 'width',
    transitionDuration: '600ms',
  },
  expanderOpen: {
    width: 270,
  },
  root: {
    justifyContent: 'space-between',
    height: 'calc(100vh - 90px)',
    willChange: 'transform, opacity',
    transitionProperty: 'transform, opacity',
    transitionDuration: '600ms',
    width: 270,
    position: 'absolute',
    right: 0,
  },
  showSide: {
    marginHorizontal: 24,
  },
  hideSide: {
    transform: [{ translateX: 300 }],
    opacity: 0.5,
  },
  role: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  contributor: {
    marginBottom: 10,
  },
})