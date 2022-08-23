async function getUserInfo() {
  const user = await queryDatabase({ idUser: 667 });
  const fillUserWithData = await fillDatosUsuario(user);
  const fillUserWithAdressData = await fillDireccionUsuario(fillUserWithData);
  return fillUserWithAdressData;
}