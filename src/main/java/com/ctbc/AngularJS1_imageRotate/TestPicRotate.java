package com.ctbc.AngularJS1_imageRotate;

import java.io.File;
import java.io.IOException;

/**
 * @author TizzyBac
 * 
 *         【參考】[Thumbnails 套件] https://blog.csdn.net/chenleixing/article/details/44685817
 */
public class TestPicRotate {

	public static void main(String[] args) {

		String folderPath = System.getProperty("user.dir") + "\\src\\main\\resources\\images\\";
		String fileName = "美國隊長.jpg";

		File fromPic = new File(folderPath + fileName);
		File toPic = new File(folderPath + "旋轉圖片結果.jpg");

		// 【1.旋轉圖片 Thumbnails 】，rotate(角度),正数则为顺时针，负数则为逆时针  
//		try {
//			long start = System.currentTimeMillis();
////			Thumbnails.of(fromPic).size(200, 200).rotate(180).toFile(toPic);
//			
//			
//			//------------------------------------------------------------------
//			BufferedImage buffImg = ImageIO.read(fromPic);
//			int ww = buffImg.getWidth();
//			int hh = buffImg.getHeight();
//			Thumbnails.of(fromPic).size(ww, hh).rotate(180).toFile(toPic);
//			//------------------------------------------------------------------
//			
////			Thumbnails.of(fromPic).scale(1.0d).rotate(180).toFile(toPic);
//			
////			Thumbnails.of(fromPic).rotate(180).toFile(toPic);
//			long end = System.currentTimeMillis();
//			System.err.println(">>>>>>>>> 旋轉圖片 >>>>>> , spend Time : " + (end - start) + " ms");
//		} catch (IOException e) {
//			e.printStackTrace();
//		}

		// 【2.旋轉圖片 RotateImgUtil 】
		try {
			long start = System.currentTimeMillis();
			RotateImgUtil.rotateImage(fromPic, toPic , 180);

			//----
//			BufferedImage outPic = RotateImgUtil.rotateImage(fromPic, 180);
//			ByteArrayOutputStream os = new ByteArrayOutputStream();
//			ImageIO.write(outPic, "jpg", os);
//			
//			try (BufferedInputStream bis = new BufferedInputStream(new ByteArrayInputStream(os.toByteArray()));
//					BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(toPic));) {
//				int len = 0;
//				byte[] bdata = new byte[1024];
//				while ((len = bis.read(bdata)) != -1) {
////				    System.out.println(len);
////					for (byte b : bdata) {
////						System.out.println(b);
////					}
//					bos.write(bdata);
//				}
//			}

			long end = System.currentTimeMillis();
			System.err.println(">>>>>>>>> 旋轉圖片 >>>>>> , spend Time : " + (end - start) + " ms");
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
