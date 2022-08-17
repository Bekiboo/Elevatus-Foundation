import { writeFileSync, readFileSync, unlinkSync } from 'fs'
import sharp from 'sharp'

export async function post({ request, response }) {
  const data = JSON.parse((await request.body.read()).toString())

  const file = data['image']

  const filePath = `static/avatars/avatar-${Date.now()}.jpg`

  writeFileSync(filePath, file, 'base64')

  const unchangedFile = readFileSync(filePath)

  await sharp(unchangedFile)
    .resize(1000)
    .toFile(`static/avatars/avatarLight-${Date.now()}.jpg`)
    .then((info) => {
      console.log('info: ' + JSON.stringify(info))
    })
    .catch((err) => {
      console.log('error: ' + err)
    })

  unlinkSync(filePath)


  return {filePath}

  // response.status(200).json({
  //   message: "Image added successfully"
  // });
}
