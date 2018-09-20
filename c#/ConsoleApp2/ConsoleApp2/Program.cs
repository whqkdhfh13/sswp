using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using GDIDrawer;
using System.Threading;
using System.Diagnostics;


namespace ConsoleApp2 {

    class Program {
		static Ball bcBall = new Ball();
		/*
		static CDrawer dp = new CDrawer(800, 600);
		static Point pCoord;
		static Point mClick;
		static int elapsedFrame = 0;
        static readonly int r = 50;
        static readonly double gravity = 0.2;
		 */
		
        static void Main(string[] args) {                      
			bcBall.run();            
        }
    }

	class Ball {
		// Variable Declaration
		CDrawer dp = new CDrawer(800, 600);
		Point pCoord;
		Point mClick;
		int elapsedFrame = 0;
		readonly int r = 50;
		readonly double gravity = 0.2;
		Stopwatch stopwatch = new Stopwatch();
		int y = 400;
		double ySpeed = 10;
		bool swt = false;

		void rend () {
			// Graphics
			dp.AddRectangle(700, 0, 100, 100, Color.FromArgb(100, 255, 0, 0));
			dp.AddEllipse(400, ( y += (int)Math.Round(ySpeed += gravity) ) - r, 2 * r, 2 * r, Color.FromArgb(255, 255, 0, 255));
			dp.AddRectangle(pCoord.X - 100, pCoord.Y - 10, 200, 20, Color.FromArgb(150, 0, 150, 150));
			if (stopwatch.ElapsedMilliseconds != 0)
				dp.AddText("FrameRate = " + 1000 * elapsedFrame / stopwatch.ElapsedMilliseconds + "\nySpeed = " + Math.Round(ySpeed), 12, 0, 0, 500, 100, Color.FromArgb(255, 255, 255));

			// Rendering
			dp.Render();
			Thread.Sleep(7);
			dp.Clear();
		}

		public void run () {
			dp.ContinuousUpdate = false;
			stopwatch.Start();
			while (true) {
				// Variable Declaration
				bool b = dp.GetLastMousePosition(out pCoord);
				elapsedFrame++;

				// checking statements and logics
				if (dp.GetLastMouseLeftClick(out mClick)) {
					if (pCoord.X > 700 && pCoord.Y < 100)
						break;
					else
						swt = true;
				}

				if (y > 600 - r) {
					ySpeed *= -0.8;
					if (swt)
						ySpeed = -12;
					swt = false;
					y += (int)ySpeed;
				}

				if (400 > pCoord.X - 100 && 400 < pCoord.X + 100 && y + r > pCoord.Y - 10 && y + r < pCoord.Y + 60) {
					y = pCoord.Y - 10 - r;
					ySpeed = -Math.Abs(ySpeed * 0.9);
				}

				rend();
			}
		}
	}
}
