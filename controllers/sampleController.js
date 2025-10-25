import Sample from "../models/sampleModel.js";

export const getSamples = async (req, res) => {
  const samples = await Sample.find();
  res.json(samples);
};

export const addSample = async (req, res) => {
  const { name } = req.body;
  const sample = new Sample({ name });
  const createdSample = await sample.save();
  res.status(201).json(createdSample);
};
