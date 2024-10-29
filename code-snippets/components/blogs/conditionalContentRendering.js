<Suspense fallback={<Loader />}>
  <StatusBar backgroundColor={yellow} barStyle="dark-content" />
  <Content contentContainerStyle={styles.containerStyle}>
    {/* More UI components go here */}
  </Content>
</Suspense>
