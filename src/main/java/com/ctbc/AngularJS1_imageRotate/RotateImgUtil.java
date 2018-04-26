package com.ctbc.AngularJS1_imageRotate;

import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class RotateImgUtil {

	public static void rotateImage(final File imgfrom, final File imgTo ,final int degree) throws IOException {
		
		BufferedImage bufferedimage = ImageIO.read(imgfrom);
		
		int w = bufferedimage.getWidth();// 得到图片宽度。  
		int h = bufferedimage.getHeight();// 得到图片高度。  
		int type = bufferedimage.getColorModel().getTransparency();// 得到图片透明度。  
		BufferedImage imgOut;// 空的图片。  
		Graphics2D graphics2d;// 空的画笔。  
		(graphics2d = (imgOut = new BufferedImage(w, h, type))
				.createGraphics()).setRenderingHint(
						RenderingHints.KEY_INTERPOLATION,
						RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		graphics2d.rotate(Math.toRadians(degree), w / 2, h / 2);// 旋转，degree是整型，度数，比如垂直90度。  
		graphics2d.drawImage(bufferedimage, 0, 0, null);// 从bufferedimagecopy图片至img，0,0是img的坐标。  
		graphics2d.dispose();
		
		ImageIO.write(imgOut , "jpg", imgTo); // 寫出旋轉完畢的圖片 
	}
	
	public static BufferedImage rotateImage(final File imgfrom, final int degree) throws IOException {
		
		BufferedImage bufferedimage = ImageIO.read(imgfrom);
		
		int w = bufferedimage.getWidth();// 得到图片宽度。  
		int h = bufferedimage.getHeight();// 得到图片高度。  
		int type = bufferedimage.getColorModel().getTransparency();// 得到图片透明度。  
		BufferedImage img;// 空的图片。  
		Graphics2D graphics2d;// 空的画笔。  
		(graphics2d = (img = new BufferedImage(w, h, type))
				.createGraphics()).setRenderingHint(
						RenderingHints.KEY_INTERPOLATION,
						RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		graphics2d.rotate(Math.toRadians(degree), w / 2, h / 2);// 旋转，degree是整型，度数，比如垂直90度。  
		graphics2d.drawImage(bufferedimage, 0, 0, null);// 从bufferedimagecopy图片至img，0,0是img的坐标。  
		graphics2d.dispose();
		return img;// 返回复制好的图片，原图片依然没有变，没有旋转，下次还可以使用。  
	}

}
