namespace ICA3
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose (bool disposing) {
            if (disposing && (components != null)) {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent () {
            this.components = new System.ComponentModel.Container();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.radioButton2 = new System.Windows.Forms.RadioButton();
            this.radioButton1 = new System.Windows.Forms.RadioButton();
            this.statusStrip1 = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.toolStripStatusLabel2 = new System.Windows.Forms.ToolStripStatusLabel();
            this.trackBar1 = new System.Windows.Forms.TrackBar();
            this.trackBar2 = new System.Windows.Forms.TrackBar();
            this.trackBar3 = new System.Windows.Forms.TrackBar();
            this.trackBar4 = new System.Windows.Forms.TrackBar();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.trackBar5 = new System.Windows.Forms.TrackBar();
            this.label13 = new System.Windows.Forms.Label();
            this.label14 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.groupBox1.SuspendLayout();
            this.statusStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar5)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.radioButton2);
            this.groupBox1.Controls.Add(this.radioButton1);
            this.groupBox1.Location = new System.Drawing.Point(12, 264);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(161, 50);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Color";
            // 
            // radioButton2
            // 
            this.radioButton2.AutoSize = true;
            this.radioButton2.Location = new System.Drawing.Point(80, 19);
            this.radioButton2.Name = "radioButton2";
            this.radioButton2.Size = new System.Drawing.Size(56, 17);
            this.radioButton2.TabIndex = 1;
            this.radioButton2.TabStop = true;
            this.radioButton2.Text = "Border";
            this.radioButton2.UseVisualStyleBackColor = true;
            // 
            // radioButton1
            // 
            this.radioButton1.AutoSize = true;
            this.radioButton1.Location = new System.Drawing.Point(16, 19);
            this.radioButton1.Name = "radioButton1";
            this.radioButton1.Size = new System.Drawing.Size(37, 17);
            this.radioButton1.TabIndex = 0;
            this.radioButton1.TabStop = true;
            this.radioButton1.Text = "Fill";
            this.radioButton1.UseVisualStyleBackColor = true;
            // 
            // statusStrip1
            // 
            this.statusStrip1.AllowMerge = false;
            this.statusStrip1.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.statusStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1,
            this.toolStripStatusLabel2});
            this.statusStrip1.Location = new System.Drawing.Point(0, 317);
            this.statusStrip1.Name = "statusStrip1";
            this.statusStrip1.Size = new System.Drawing.Size(336, 24);
            this.statusStrip1.SizingGrip = false;
            this.statusStrip1.TabIndex = 1;
            this.statusStrip1.Text = "statusStrip1";
            // 
            // toolStripStatusLabel1
            // 
            this.toolStripStatusLabel1.BorderSides = System.Windows.Forms.ToolStripStatusLabelBorderSides.Right;
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Padding = new System.Windows.Forms.Padding(0, 0, 2, 0);
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(38, 19);
            this.toolStripStatusLabel1.Text = "Idle..";
            // 
            // toolStripStatusLabel2
            // 
            this.toolStripStatusLabel2.BorderStyle = System.Windows.Forms.Border3DStyle.Etched;
            this.toolStripStatusLabel2.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
            this.toolStripStatusLabel2.Name = "toolStripStatusLabel2";
            this.toolStripStatusLabel2.Padding = new System.Windows.Forms.Padding(3, 0, 0, 0);
            this.toolStripStatusLabel2.Size = new System.Drawing.Size(283, 19);
            this.toolStripStatusLabel2.Spring = true;
            this.toolStripStatusLabel2.Text = "toolStripStatusLabel2";
            this.toolStripStatusLabel2.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // trackBar1
            // 
            this.trackBar1.Location = new System.Drawing.Point(92, 15);
            this.trackBar1.Maximum = 255;
            this.trackBar1.Name = "trackBar1";
            this.trackBar1.Size = new System.Drawing.Size(212, 45);
            this.trackBar1.TabIndex = 2;
            this.trackBar1.TickFrequency = 0;
            this.trackBar1.ValueChanged += new System.EventHandler(this.trackBar1_ValueChanged);
            // 
            // trackBar2
            // 
            this.trackBar2.Location = new System.Drawing.Point(92, 63);
            this.trackBar2.Maximum = 255;
            this.trackBar2.Name = "trackBar2";
            this.trackBar2.Size = new System.Drawing.Size(212, 45);
            this.trackBar2.TabIndex = 3;
            this.trackBar2.TickFrequency = 0;
            this.trackBar2.ValueChanged += new System.EventHandler(this.trackBar2_ValueChanged);
            // 
            // trackBar3
            // 
            this.trackBar3.Location = new System.Drawing.Point(92, 114);
            this.trackBar3.Maximum = 255;
            this.trackBar3.Name = "trackBar3";
            this.trackBar3.Size = new System.Drawing.Size(212, 45);
            this.trackBar3.TabIndex = 4;
            this.trackBar3.TickFrequency = 0;
            this.trackBar3.ValueChanged += new System.EventHandler(this.trackBar3_ValueChanged);
            // 
            // trackBar4
            // 
            this.trackBar4.Location = new System.Drawing.Point(92, 165);
            this.trackBar4.Maximum = 255;
            this.trackBar4.Name = "trackBar4";
            this.trackBar4.Size = new System.Drawing.Size(212, 45);
            this.trackBar4.TabIndex = 5;
            this.trackBar4.TickFrequency = 0;
            this.trackBar4.Value = 255;
            this.trackBar4.ValueChanged += new System.EventHandler(this.trackBar4_ValueChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(38, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(27, 13);
            this.label1.TabIndex = 6;
            this.label1.Text = "Red";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(38, 63);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(36, 13);
            this.label2.TabIndex = 7;
            this.label2.Text = "Green";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(38, 114);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(28, 13);
            this.label3.TabIndex = 8;
            this.label3.Text = "Blue";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(14, 165);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(72, 13);
            this.label4.TabIndex = 9;
            this.label4.Text = "Transparency";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(100, 47);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(13, 13);
            this.label5.TabIndex = 10;
            this.label5.Text = "0";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(100, 95);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(13, 13);
            this.label6.TabIndex = 11;
            this.label6.Text = "0";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(100, 146);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(13, 13);
            this.label7.TabIndex = 12;
            this.label7.Text = "0";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(100, 197);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(13, 13);
            this.label8.TabIndex = 13;
            this.label8.Text = "0";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(279, 47);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(25, 13);
            this.label9.TabIndex = 14;
            this.label9.Text = "255";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(279, 98);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(25, 13);
            this.label10.TabIndex = 15;
            this.label10.Text = "255";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(279, 149);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(25, 13);
            this.label11.TabIndex = 16;
            this.label11.Text = "255";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Location = new System.Drawing.Point(279, 197);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(25, 13);
            this.label12.TabIndex = 17;
            this.label12.Text = "255";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(204, 276);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(99, 37);
            this.button1.TabIndex = 18;
            this.button1.Text = "Draw";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // trackBar5
            // 
            this.trackBar5.Location = new System.Drawing.Point(92, 213);
            this.trackBar5.Maximum = 400;
            this.trackBar5.Name = "trackBar5";
            this.trackBar5.Size = new System.Drawing.Size(211, 45);
            this.trackBar5.TabIndex = 19;
            this.trackBar5.TickFrequency = 0;
            this.trackBar5.Value = 100;
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(39, 226);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(27, 13);
            this.label13.TabIndex = 20;
            this.label13.Text = "Size";
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Location = new System.Drawing.Point(100, 245);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(13, 13);
            this.label14.TabIndex = 21;
            this.label14.Text = "0";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Location = new System.Drawing.Point(279, 245);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(25, 13);
            this.label15.TabIndex = 22;
            this.label15.Text = "400";
            // 
            // timer1
            // 
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(336, 341);
            this.Controls.Add(this.label15);
            this.Controls.Add(this.label14);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.trackBar5);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.trackBar4);
            this.Controls.Add(this.trackBar3);
            this.Controls.Add(this.trackBar2);
            this.Controls.Add(this.trackBar1);
            this.Controls.Add(this.statusStrip1);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MaximumSize = new System.Drawing.Size(999, 999);
            this.MinimumSize = new System.Drawing.Size(332, 339);
            this.Name = "Form1";
            this.Text = "Form1";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.statusStrip1.ResumeLayout(false);
            this.statusStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar5)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton radioButton2;
        private System.Windows.Forms.RadioButton radioButton1;
        private System.Windows.Forms.StatusStrip statusStrip1;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.TrackBar trackBar1;
        private System.Windows.Forms.TrackBar trackBar2;
        private System.Windows.Forms.TrackBar trackBar3;
        private System.Windows.Forms.TrackBar trackBar4;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TrackBar trackBar5;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Timer timer1;
    }
}

