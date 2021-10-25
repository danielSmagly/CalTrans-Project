package jumpstart;

public class summarySection { //Used to hold the float values for the cell sizes of the summary sections 
	private float first;
	private float second;
	private float third;
	private float fourth;
	
	public summarySection(){
		this.first = 75f;
		this.second = 200f;
		this.third = 50f;
		this.fourth = 50f;
	}
	
	public float getFirst(){
		return first;
	}
	
	public float getSecond(){
		return second;
	}
	
	public float getThird(){
		return third;
	}
	
	public float getFourth(){
		return fourth;
	}
	
	public void changeSection(float tempFirst, float tempSecond, float tempThird, float tempFourth){
		first = tempFirst;
		second = tempSecond;
		third = tempThird;
		fourth = tempFourth;
	}
}
